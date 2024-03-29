import * as THREE from 'three';
import { Colors } from './utils';

const renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById('app') as HTMLCanvasElement
})

renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new THREE.Scene();
scene.background = new THREE.Color( Colors.WHITE );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const animate = () => {
	requestAnimationFrame( animate );
    
	renderer.render( scene, camera );
}

animate();