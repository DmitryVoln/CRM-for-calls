import React, { ReactHTMLElement } from "react";

export interface IDropdown {
    name: string;
    options: {type: string, id:string}[];
    onclick(event: React.MouseEvent): void;
}