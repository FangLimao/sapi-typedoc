/* IMPORT */ import { EaseOptions, Vector3 } from '../index';

export interface CameraSetPosOptions {
    easeOptions?: EaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}