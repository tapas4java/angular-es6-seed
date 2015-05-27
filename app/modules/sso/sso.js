import {SsoController} from "./sso-controller";
import {SsoService} from "./sso-service";

export var ssoModule = angular.module("sso", ['ngMaterial']);

ssoModule.controller("SsoController", SsoController);
ssoModule.service("SsoService", SsoService);
