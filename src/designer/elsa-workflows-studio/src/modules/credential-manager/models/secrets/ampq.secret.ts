import { Secret } from "../secret.model";

export const Ampq: Secret = {
  category: "AMPQ",
  customAttributes: {},
  description: "AMPQ connection data",
  displayName: "AMPQ secret",
  inputProperties: [
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Credential Type",
      name: "Credential Type",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Credential Name",
      name: "Credential Name",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Hostname",
      name: "Hostname",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The ending number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Port",
      name: "Port",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.Int64",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "User",
      name: "User",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Password",
      name: "Password",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Transport Type",
      name: "Transport Type",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    }
  ],
  outcomes: ["Iterate", "Done"],
  outputProperties: [{name: "Output", type: "System.Object", disableWorkflowProviderSelection: false}],
  properties: [
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Credential Type",
      name: "Credential Type",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Credential Name",
      name: "Credential Name",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Hostname",
      name: "Hostname",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The ending number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Port",
      name: "Port",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.Int64",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "User",
      name: "User",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Password",
      name: "Password",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    },
    {
      considerValuesAsOutcomes: false,
      disableWorkflowProviderSelection: false,
     // hint: "The starting number.",
      isBrowsable: true,
      isDesignerCritical: false,
      isReadOnly: false,
      label: "Transport Type",
      name: "Transport Type",
      order: 0,
      supportedSyntaxes: ["JavaScript", "Liquid"],
      type: "System.String",
      uiHint: "single-line",
    }
  ],
  type: "AMPQ"
}