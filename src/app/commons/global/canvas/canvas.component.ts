import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.sass']
})
export class CanvasComponent implements OnInit {
    @ViewChild('canva', {static: true}) canva !: ElementRef<HTMLCanvasElement>

    renderer?: THREE.WebGLRenderer
    scene?: THREE.Scene
    camera?: THREE.PerspectiveCamera
    controls?: OrbitControls

    cube ?: Array<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>> = []

    constructor() {
    }

    ngOnInit(): void {
        this.createScene()
        this.initCamera()
        this.render()

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({color: 0xaaaaaa});

        for (let i = 0; i < 5; i++) {
            this.cube!.push(new THREE.Mesh(geometry, material))
            this.cube![i].castShadow = true
            this.cube![i].receiveShadow = true;
            this!.cube![i].position.y = i;
            this!.cube![i].position.x = i;
            this!.cube![i].rotation.z = i;
            this.scene!.add(this.cube![i]);
        }

        this.camera!.position.set(9, 5, 5);

        const light = new THREE.SpotLight(0xf0f0f0, 2);
        light.position.set(10, 10, 3);
        light.castShadow = true
        light.angle = 0.3
        this.scene!.add(light)

        this.controls = new OrbitControls(this.camera!, this.renderer!.domElement);
        this.animate()
    }

    private createScene() {
        this.scene = new THREE.Scene();
    }

    private initCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    }

    public render(): void {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canva.nativeElement,
            alpha: true
        });
        this.renderer.setSize(1726, 806);
        this.renderer.setClearColor(0xf0f0f0, 0);
        this.renderer.shadowMap.enabled = true;
    }

    public animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        this.controls?.update()
        this.renderer!.render(this.scene!, this.camera!);
    }
}
