/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yml" {
	const value: any;
	export default value;
}