"use client";
import React from "react";
import {
	AppBar,
	IconButton,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export interface GlobalLayoutAppBarProps {
    onMenuClick?: () => void;
}

function HideOnScroll(props: { children: React.ReactElement }) {
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	// if (typeof window !== "undefined") {
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{props.children}
		</Slide>
	);
	// } else {
	// 	return props.children;
	// }
}

export default function GlobalLayoutAppBar(props: GlobalLayoutAppBarProps) {
	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={props.onMenuClick}
					>
						<Menu />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						<>{process.env.NEXT_PUBLIC_APP_TITLE}</>
					</Typography>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}
