/**
 * Template Sample
 */

import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import {
  QueryBuilderComponent,
  TemplateColumn,
  ColumnsModel,
  RuleChangeEventArgs
} from "@syncfusion/ej2-angular-querybuilder";
import {
  getComponent,
  createElement,
  isNullOrUndefined
} from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { RuleModel } from "@syncfusion/ej2-querybuilder";
import { expenseData } from "./data-source";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("querybuilder") qryBldrObj: QueryBuilderComponent;
  dataSource: Object[] = expenseData;

  paymentTemplate: TemplateColumn = {
    create: (args: {
      elements: Element;
      values: string[] | string;
      operator: string;
    }) => {
      return createElement("input", { attrs: { type: "text" } });
    },
    destroy: (args: { elementId: string }) => {
      let dropdown: DropDownList = getComponent(
        document.getElementById(args.elementId),
        "dropdownlist"
      ) as DropDownList;
      let textbox: TextBox = getComponent(
        document.getElementById(args.elementId),
        "textbox"
      ) as TextBox;
      if (textbox) {
        textbox.destroy();
      }
    },
    write: (args: {
      elements: Element;
      values: string[] | string;
      operator: string;
    }) => {
      if (args.operator == "equal") {
        let ds: string[] = [
          "Cash",
          "Debit Card",
          "Credit Card",
          "Net Banking",
          "Wallet"
        ];
        let dropDownObj: DropDownList = new DropDownList({
          dataSource: ds,
          value: args.values as string,
          change: (e: any) => {
            this.qryBldrObj.notifyChange(e.itemData.value, e.element);
          }
        });
        dropDownObj.appendTo("#" + args.elements.id);
      } else {
        let inputobj1: TextBox = new TextBox({
          change: (e: any) => {
            this.qryBldrObj.notifyChange(e.value, e.event.target);
          }
        });
        inputobj1.appendTo("#" + args.elements.id);
      }
    }
  };

  paymentOperators = [
    { value: "equal", key: "Equal" },
    { value: "notequal", key: "Not Equal" }
  ];

  filter: ColumnsModel[] = [
    {
      field: "Category",
      label: "Category",
      type: "string"
    },
    {
      field: "Payment Mode",
      label: "Payment Mode",
      type: "string",
      template: this.paymentTemplate
    },
    {
      field: "Transaction Type",
      label: "Transaction Type",
      type: "string"
    },
    { field: "Description", label: "Description", type: "string" },
    { field: "Date", label: "Date", type: "date" },
    {
      field: "Amount",
      label: "Amount",
      type: "number"
    }
  ];

  importRules: RuleModel = {
    condition: "and",
    rules: [
      {
        label: "Category",
        field: "Category",
        type: "string",
        operator: "in",
        value: ["Clothing"]
      },
      {
        condition: "or",
        rules: [
          {
            label: "Payment Mode",
            field: "Payment Mode",
            type: "string",
            operator: "equal",
            value: "Cash"
          }
        ]
      }
    ]
  };
}
