import {Scene3D, Project} from 'enable3d'
import {PhysicsLoader} from '@enable3d/ammo-physics'

export * as keyStores from './key_stores/index';
export * from './common-index';
export * from './connect';
export * from './constants';


export class PhysicsTest extends Scene3D {
async init(){
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    

}
async create(){
    this.warpSpeed()

    let box1 = this.physics.add.box({y: 5, z: -2,x: 1},{lambert: {color: 'red'}})
    let box2 = this.physics.add.box({y: 5, z: -3,x: 1},{lambert: {color: 'red'}})
    let box3 = this.physics.add.box({y: 5, z: -1,x: 1},{lambert: {color: 'red'}})
    let box4 = this.physics.add.box({y: 6, z: -2,x: 1},{lambert: {color: 'red'}})
    let box5 = this.physics.add.box({y: 6, z: -4,x: 1},{lambert: {color: 'red'}})
    let box6 = this.physics.add.box({y: 6, z: -5,x: 1},{lambert: {color: 'red'}})
    let box7 = this.physics.add.box({y: 7, z: -3,x: 1},{lambert: {color: 'red'}})
    let box8 = this.physics.add.box({y: 8, z: -3,x: 1},{lambert: {color: 'red'}})
    let box9 = this.physics.add.box({y: 7, z: -4,x: 1},{lambert: {color: 'red'}})
    let cylinder1 = this.physics.add.cylinder({y: 5, z: -2,x: 4},{lambert: {color: 'green'}})
    let cylinder2 = this.physics.add.cylinder({y: 5, z: -3,x: 4},{lambert: {color: 'green'}})
    let cylinder3 = this.physics.add.cylinder({y: 5, z: -1,x: 4},{lambert: {color: 'green'}})
    let cylinder4 = this.physics.add.cylinder({y: 6, z: -2,x: 4},{lambert: {color: 'green'}})
    let cylinder5 = this.physics.add.cylinder({y: 6, z: -4,x: 4},{lambert: {color: 'green'}})
    let cylinder6 = this.physics.add.cylinder({y: 6, z: -5,x: 4},{lambert: {color: 'green'}})
    let cylinder7 = this.physics.add.cylinder({y: 7, z: -3,x: 4},{lambert: {color: 'green'}})
    let cylinder8 = this.physics.add.cylinder({y: 8, z: -3,x: 4},{lambert: {color: 'green'}})
    let cylinder9 = this.physics.add.cylinder({y: 7, z: -4,x: 4},{lambert: {color: 'green'}})
    let sphere1 = this.physics.add.sphere({y: 8, z: -3,x: 3 },{lambert: {color: 'blue'}})
    
    this.physics.debug?.enable()

}
}

const config = {scenes: [PhysicsTest],antialias: true}
PhysicsLoader ('/ammo',()=> new Project (config))


