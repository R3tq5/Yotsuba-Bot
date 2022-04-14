/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/913ab3710227ee3917bf1.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `𝙄'𝙈 𝘼𝙇𝙇 𝙁𝙄𝙍𝙀𝘿 𝙐𝙋!!,🔥🔥🔥 🅽🅰🆃🆂🆄 🅳🆁🅰🅶🅽🅴🅴🅻 🔥 𝙐𝙎𝙀 *${this.client.config.prefix}help* if you want anything. \n`,
			}
		);
	};
}
