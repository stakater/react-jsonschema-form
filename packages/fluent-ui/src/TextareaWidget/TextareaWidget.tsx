import React from "react";

import { WidgetProps } from "@stakater/fs-core";

import TextWidget from '../TextWidget';

const TextareaWidget = (props: WidgetProps) => {
  const uiProps: any = props.options["props"] || {};
  let options = {
    ...props.options,
    "props": {
      multiline: true,
      ...uiProps
    }
  };
  // TODO: rows and columns.
  return (
    <TextWidget {...props} options={options} />
  );
}

export default TextareaWidget;
