import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'home-three-background',
  standalone: true,
  imports: [],
  templateUrl: './three-background.component.html',
  styleUrl: './three-background.component.scss'
})
export class ThreeBackgroundComponent implements AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef;
  private canvas!: HTMLCanvasElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvasRef.nativeElement, antialias: true});
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00});
    this.cube = new THREE.Mesh( geometry, material);
    this.scene.add(this.cube);
    this.camera.position.z = 5;

    this.animate();
  }  

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener("window:resize", ['$event'])
  onResize(event: Event){
    let newWidth = (event.target as Window).innerWidth;
    let newHeight = (event.target as Window).innerHeight;
    
    this.camera.aspect = newWidth / newHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(newWidth, newHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }
}
