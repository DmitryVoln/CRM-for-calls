import React from "react";


export interface IOptions {
    options: {type: string, id: string}[];
    onclick(value: React.MouseEvent<HTMLButtonElement>): void;
}

