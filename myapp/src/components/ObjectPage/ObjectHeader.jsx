import React from "react";
import { FlexBox } from "@ui5/webcomponents-react/dist/FlexBox";
import { FlexBoxDirection } from "@ui5/webcomponents-react/dist/FlexBoxDirection";
import { DynamicPageHeader } from "@ui5/webcomponents-react/dist/DynamicPageHeader";
import ObjectAttribute from "./ObjectAttribute";
import ObjectNumber from "./ObjectNumber";
import Formatter from "../../utils/formatter";

function ObjectHeader() {
  return (
    <DynamicPageHeader>
      <FlexBox direction={FlexBoxDirection.Row}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <ObjectAttribute label="Location" text="Warehouse A" />
          <ObjectAttribute label="Halfway" text="23L" />
          <ObjectNumber label="Rack" number="144" />
        </FlexBox>
        <ObjectAttribute
          direction={FlexBoxDirection.Column}
          label="Availability"
          stateValue="In Stock"
          text="In Stock (97 units)"
          stateFormatter={Formatter.stockState}
        />
      </FlexBox>
    </DynamicPageHeader>
  );
}

export default ObjectHeader;
