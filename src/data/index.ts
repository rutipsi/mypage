export const SITE_TITLE = "Rutip's Page";
export const SITE_DESCRIPTION = "A webpage for Rutip.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "blog",
		url: "/blog",
	},
	{
		label: "notes",
		url: "/notes",
	},
	{
		label: "photos",
		url: "/photos",
	},
];

export const title = "Rutip's Page";
export const description = "A webpage for Rutip.";
export const image = "/images/ogimage.png";
export const url = "https://rutip.lol";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Rutip's Page",
};


export const products = [
	
/*deactivated icons*/
/*{
		name: "Fli.so",
		url: "https://fli.so",
		image: "/products/fli.png",
	},
	{
		name: "Uiino",
		url: "https://uiino.com",
		image: "/products/uiino.png",
	},
	{
		name: "SticAI",
		url: "https://sticai.com",
		image: "/products/sticai.png",
	},
	{
		name: "Dun",
		url: "https://dunsuite.com",
		image: "/products/dun.png",
	},
	{
		name: "DunTasks",
		url: "https://duntasks.com",
		image: "/products/duntasks.png",
	},*/
];

export const socialLinks = [
	{
		label: "YouTube",
		url: "https://youtube.com/@rutipsi",
	},
	{
		label: "Instagram",
		url: "https://instagram.com/rutipsi",
	},
	{
		label: "Twitter",
		url: "https://twitter.com/rutipsi",
	},
	{
		label: "TikTok",
		url: "https://www.tiktok.com/@rutipsi",
	},
    {
        label: "Discord",
        url: "https://discord.gg/jmhckP6ptd",
    },

];
/* Deactivated Tools */

export interface Tool {
	id: string;
	name: string;
	description: string;
	slug: string;
}

export const tools: Tool[] = [
    {
        id: "ghosturl",
        name: "GhostURL",
        description: "Paste a link, get the same-looking text with invisible zero-width spaces. It looks normal, but it’s not clickable or detectable.",
        slug: "ghosturl",
    },
];
