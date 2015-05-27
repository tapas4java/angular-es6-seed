import {HomeController} from "./home-controller";
import {HomeService} from "./home-service";

export var homeModule = angular.module("Home", ['ngMaterial']);

homeModule.controller("HomeCtrl", HomeController);
homeModule.service("HomeService", HomeService);

