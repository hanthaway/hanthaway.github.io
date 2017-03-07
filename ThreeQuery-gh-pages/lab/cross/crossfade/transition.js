$$.Transition = function(sceneA, option, texture) {

	var makeSubWorld = function(scene, camera, injections, clearColor) {
		var subWorld = {
			scene: scene,
			camera: camera,
			actionInjections: injections
		};
		renderTargetParameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBFormat,
			stencilBuffer: false
		};
		subWorld.fbo = new THREE.WebGLRenderTarget($$.getWorldWidth(), $$.getWorldHeight(), renderTargetParameters);
		subWorld.clearColor = clearColor;
		subWorld.update = function(rtt) {
			if($$.global.settings.resize) {
				var width = $$.getWorldWidth();
				var height = $$.getWorldHeight();
				if(subWorld.camera.type == "PerspectiveCamera") {
					subWorld.camera.aspect = width / height;
					subWorld.camera.updateProjectionMatrix();
				} else {
					subWorld.camera.left = -width / 2;
					subWorld.camera.right = width / 2;
					subWorld.camera.top = height / 2;
					subWorld.camera.bottom = -height / 2;
				}
				$$.global.renderer.setSize(width, height);
			}
			$$.global.renderer.setClearColor(subWorld.clearColor);
			if(rtt)
				$$.global.renderer.render(subWorld.scene, subWorld.camera, subWorld.fbo, true);
			else {
				$$.global.renderer.render(subWorld.scene, subWorld.camera);
			}
		};
		return subWorld;
	};

	var transitionParams = $$.extends({}, [{
		"useTexture": true,
		"transition": 0,
		"transitionSpeed": 10,
		"texture": 5,
		"loopTexture": true,
		"animateTransition": true,
		"textureThreshold": 0.3
	}, option]);
	var sceneB = makeSubWorld($$.global.world, $$.global.camera, $$.actionInjections, $$.global.renderer.getClearColor().clone());

	this.scene = new THREE.Scene();
	this.cameraOrtho = $$.createCamera({
		type: "OrthographicCamera",
		near: -10,
		far: 10
	});
	this.texture = texture;
	this.quadmaterial = new THREE.ShaderMaterial({
		uniforms: {
			tDiffuse1: {
				value: null
			},
			tDiffuse2: {
				value: null
			},
			mixRatio: {
				value: 0.0
			},
			threshold: {
				value: 0.1
			},
			useTexture: {
				value: 1
			},
			tMixTexture: {
				value: this.texture
			}
		},
		vertexShader: [

			"varying vec2 vUv;",

			"void main() {",

			"vUv = vec2( uv.x, uv.y );",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),
		fragmentShader: [
			"uniform float mixRatio;",
			"uniform sampler2D tDiffuse1;",
			"uniform sampler2D tDiffuse2;",
			"uniform sampler2D tMixTexture;",
			"uniform int useTexture;",
			"uniform float threshold;",
			"varying vec2 vUv;",

			"void main() {",

			"vec4 texel1 = texture2D( tDiffuse1, vUv );",
			"vec4 texel2 = texture2D( tDiffuse2, vUv );",

			"if (useTexture==1) {",

			"vec4 transitionTexel = texture2D( tMixTexture, vUv );",
			"float r = mixRatio * (1.0 + threshold * 2.0) - threshold;",
			"float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);",

			"gl_FragColor = mix( texel1, texel2, mixf );",
			"} else {",

			"gl_FragColor = mix( texel2, texel1, mixRatio );",

			"}",
			"}"

		].join("\n")
	});

	$$.global.world = this.scene;
	$$.global.camera = this.cameraOrtho;

	quadgeometry = new THREE.PlaneBufferGeometry($$.getWorldWidth(), $$.getWorldHeight());

	this.quad = new THREE.Mesh(quadgeometry, this.quadmaterial);
	this.scene.add(this.quad);

	// Link both scenes and their FBOs
	this.sceneA = sceneA;
	this.sceneB = sceneB;

	this.quadmaterial.uniforms.tDiffuse1.value = sceneA.fbo.texture;
	this.quadmaterial.uniforms.tDiffuse2.value = sceneB.fbo.texture;

	this.needChange = false;

	this.setTextureThreshold = function(value) {

		this.quadmaterial.uniforms.threshold.value = value;

	};

	this.useTexture = function(value) {

		this.quadmaterial.uniforms.useTexture.value = value ? 1 : 0;

	};

	this.setTexture = function(i) {

		this.quadmaterial.uniforms.tMixTexture.value = this.texture;

	};

	this.render = function() {
		var owner = arguments.callee.owner;
		if($$.global.settings.resize) {
			var width = $$.getWorldWidth();
			var height = $$.getWorldHeight();
			owner.cameraOrtho.left = -width / 2;
			owner.cameraOrtho.right = width / 2;
			owner.cameraOrtho.top = height / 2;
			owner.cameraOrtho.bottom = -height / 2;
		}

		if(transitionParams.animateTransition) {
			transitionParams.transition += 0.001 * transitionParams.transitionSpeed;
		}
		owner.quadmaterial.uniforms.mixRatio.value = Math.min(transitionParams.transition, 1);
		if(transitionParams.transition === 0) {
			owner.sceneB.update(false);
		} else if(transitionParams.transition >= 1) {
			owner.sceneA.update(true);
			for(var i = 0; i < $$.actionInjections.length; i++) {
				if($$.actionInjections[i] == arguments.callee) {
					$$.actionInjections.splice(i, 1);
				}
			}
			owner.sceneA.toMain();

		} else {
			$$.global.renderer.setClearColor(owner.sceneB.clearColor);
			owner.sceneB.update(true);
			$$.global.renderer.setClearColor(owner.sceneA.clearColor);
			owner.sceneA.update(true);
			$$.global.renderer.render(owner.scene, owner.cameraOrtho, null, true);
		}
	};
	this.render.owner = this;
};