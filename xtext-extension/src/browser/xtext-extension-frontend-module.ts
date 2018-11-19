/**
 * Generated using theia-extension-generator
 */

import { XtextExtensionCommandContribution, XtextExtensionMenuContribution } from './xtext-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(XtextExtensionCommandContribution);
    bind(MenuContribution).to(XtextExtensionMenuContribution);
    
});