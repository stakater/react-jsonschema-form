import React from "react";

import { AddButtonProps } from "@stakater/fs-core";

import { IIconProps, CommandBarButton } from "@fluentui/react";

const addIcon: IIconProps = { iconName: "Add" };

const AddButton = (props: AddButtonProps) => (
  <CommandBarButton
    style={{ height: "32px" }}
    iconProps={addIcon}
    text="Add item"
    className={props.className}
    onClick={e => props.onClick(e as any)}
    disabled={props.disabled}
    />

);

export default AddButton;
