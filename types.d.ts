// Console log shortcut
declare const l: Function;

// Lodash
declare const lodash: typeof import("lodash");

// Wordpress
declare const wp: {
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	data: typeof import("wordpress__data");
	domReady: typeof import("wordpress__dom-ready").default;
	element: typeof import("wordpress__element");
	hooks: typeof import("wordpress__hooks");
	htmlEntities: typeof import("wordpress__html-entities");
	i18n: typeof import("wordpress__i18n");
};

interface Object {
	[key: string]: any;
}

interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

interface Attributes {
	language: string | undefined;
	theme: string | undefined;
	scheme: "light" | "dark" | undefined;
	view: "editor" | "previewer";
	content: string;
	copy_button_enabled: boolean;
	label_enabled: boolean;
	label_type: "custom" | "language";
	label: string;
	padding_tb: number;
	padding_lr: number;
	border_width: number;
	border_radius: number;
}

interface SaveProps {
	attributes: Attributes;
}

interface EditProps {
	className: string;
	attributes: Attributes;
	setAttributes: Function;
}
