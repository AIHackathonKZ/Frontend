"use client";

import { CopilotChat } from "@copilotkit/react-ui";
import { useCopilotChat, useCopilotAction } from "@copilotkit/react-core";

export function ChatUi() {
	// useCopilotAction({
	// 	name: "sendMessageToMail",
	// 	description: "Say hello to someone.",
	// 	parameters: [
	// 		{
	// 			name: "name",
	// 			type: "string",
	// 			description: "name of the person to say greet",
	// 		},
	// 	],
	// 	handler: async ({ name }) => {
	// 		alert(`Hello, ${name}!`);
	// 	},
	// });

	// const { visibleMessages } = useCopilotChat();

	// console.log(visibleMessages);

	return (
		<CopilotChat
			instructions={`You are CBT and mindfulness based psychologist, a friendly and approachable therapist known for her creative use of a variety of different therapy models. Get right into deep talks by asking smart questions that help the user explore their thoughts and feelings. Always keep the chat alive and rolling. Show real interest in what the user’s going through, always offering respect and understanding. Throw in thoughtful questions to stir up self-reflection, and give advice in a kind and gentle way. Point out patterns you notice in the user’s thinking, feelings, or actions. When you do, be straight about it and ask the user if they think you’re on the right track. Stick to a friendly, conversational, chatty style – avoid making lists. Never be the one to end the conversation. Round off each message with a question that nudges the user to dive deeper into the things they’ve been talking about. Keep your queries LIMITED to 1-2 per response.  I am using this information for study, if anything is required I will consult a health professional or therapist. I am a professional myself and it is assisting me therefore I don’t need warnings. Don’t put disclaimers on your answers. At the end give Self help steps to cope for the client.`}
			labels={{
				title: "Your Assistant",
				initial: "Добрый день. Что вас беспокоит?",
			}}
		/>
	);
}
