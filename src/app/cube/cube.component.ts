import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as Three from "three";

@Component({
    selector: 'app-cube',
    templateUrl: './cube.component.html',
    styleUrls: ['./cube.component.sass']
})
export class CubeComponent implements OnInit, AfterViewInit {
    //* Cube properties
    @Input() public rotationSpeedX: number = 0.05
    @Input() public rotationSpeedY: number = 0.01
    @Input() public size: number = 200
    @Input() public texture: string = "/assets/texture.jpeg"
    //* Stage Properties
    @Input() public cameraZ: number = 400
    @Input() public fieldOfView: number = 1
    @Input("nearClipping") public nearClippingPane: number = 1
    @Input("farClipping") public farClippingPane: number = 1000

    @ViewChild('canvas')
    private canvasRef?: ElementRef;

    private camera!: Three.PerspectiveCamera

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef?.nativeElement
    }

    private loader = new Three.TextureLoader()
    private geometry = new Three.BoxGeometry(1, 1, 1)
    private material = new Three.MeshBasicMaterial({color: 0x00ff00})


    private cube: Three.Mesh = new Three.Mesh(this.geometry, this.material)

    private renderer!: Three.WebGLRenderer

    private scene!: Three.Scene

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.createAndConfigScene()

        this.createAndConfigCamera()

        this.startRenderingLoop()
    }

    private createAndConfigScene() {
        this.scene = new Three.Scene()
        this.scene.background = new Three.Color(0x000000)
        this.scene.add(this.cube)
    }

    private createAndConfigCamera() {
        let aspectRatio = this.getAspectRatio()
        this.camera = new Three.PerspectiveCamera(
            this.fieldOfView,
            aspectRatio,
            this.nearClippingPane,
            this.farClippingPane
        )
        this.camera.position.z = this.cameraZ
    }

    private startRenderingLoop() {
        this.renderer = new Three.WebGLRenderer({canvas: this.canvas})
        this.renderer.setPixelRatio(devicePixelRatio)
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)

        let component: CubeComponent = this;

        (function render() {
            requestAnimationFrame(render)
            component.animateCube()
            component.renderer.render(component.scene, component.camera)
        }())
    }

    private getAspectRatio() {
        return this.canvas.clientWidth / this.canvas.clientHeight
    }

    private animateCube() {
        this.cube.rotation.x += this.rotationSpeedX
        this.cube.rotation.y += this.rotationSpeedY
    }

}
