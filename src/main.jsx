import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Component } from "./Component.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Component />
	</StrictMode>
);
