import { injectable, inject, ContainerModule } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { DslClientContribution } from "./language-contribution";
import { CommonMenus } from "@theia/core/lib/browser";

export default new ContainerModule(bind => {
	bind<LanguageClientContribution>(LanguageClientContribution).to(DslClientContribution).inSingletonScope();
})
export const XtextExtensionCommand = {
    id: 'XtextExtension.command',
    label: "Shows a message"
};

@injectable()
export class XtextExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(XtextExtensionCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class XtextExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: XtextExtensionCommand.id,
            label: 'Say Hello'
        });
    }
}