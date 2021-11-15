import React from "react";
import { FlexBox } from "@ui5/webcomponents-react/dist/FlexBox";
import { FlexBoxDirection } from "@ui5/webcomponents-react/dist/FlexBoxDirection";
import { Icon } from "@ui5/webcomponents-react/dist/Icon";
import { Label } from "@ui5/webcomponents-react/dist/Label";
import { ObjectStatus } from "@ui5/webcomponents-react/dist/ObjectStatus";

function ObjectAttribute({
  label,
  icon,
  text,
  stateFormatter,
  stateValue,
  state,
  direction = FlexBoxDirection.Row,
}) {
  return (
    <FlexBox direction={direction} style={{ marginLeft: "1rem" }}>
      <Label wrap={true} showColon={true} style={{ marginRight: "0.5rem" }}>
        {label}
      </Label>
      <ObjectStatus
        icon={icon && <Icon name={icon} />}
        state={
          state
            ? state
            : stateFormatter
            ? stateValue
              ? stateFormatter(stateValue)
              : stateFormatter(text)
            : "None"
        }
      >
        {text}
      </ObjectStatus>
    </FlexBox>
  );
}

export default ObjectAttribute;
