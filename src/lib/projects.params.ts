import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'create3-person-tracking',
		color: '#5e95e3',
		description:
			'Using <a href=https://edu.irobot.com/what-we-offer/create3>iRobot Create3</a> and <a href=https://github.com/ifzhang/ByteTrack>Bytetrack</a> to follow a person in camera view',
		shortDescription:
			'Using Bytetrack to track individuals',
		links: [{ to: 'https://profilewebsite.blob.core.windows.net/images/robot_person_view.mp4', label: 'Demo' }, { to: 'https://colab.research.google.com/drive/1abBcKL6MP-Dki7VYOz25ja5_Y22YEe0O?usp=sharing', label: 'Colab' }],
		logo: Assets.Python,
		name: 'Create3 person tracking',
		period: {
			from: new Date()
		},
		skills: getSkills('python'/*, 'ts', 'tailwind'*/),
		type: 'People Tracker',
		screenshots: [
			{
				label: 'Compare Trackers',
				src: 'https://profilewebsite.blob.core.windows.net/images/Picture1.png'
			},
		    {  label: 'ByteTrack',
			   src: 'https://profilewebsite.blob.core.windows.net/images/bytetracker.png'
		    }
		]
	},
	{
		slug: 'people-tracking',
		color: '#5e95e3',
		description:
			'Using <a href=https://github.com/ifzhang/ByteTrack>Bytetrack</a> and <a href=https://github.com/noahcao/OC_SORT>OC_SORT</a> through mmtracking, detect and track individuals',
		shortDescription:
			'Using Bytetrack to track individuals',
		links: [{ to: 'https://profilewebsite.blob.core.windows.net/images/Tracking-Compare.mp4', label: 'Demo' }],
		logo: Assets.Python,
		name: 'People Tracking',
		period: {
			from: new Date()
		},
		skills: getSkills('python'/*, 'ts', 'tailwind'*/),
		type: 'People Tracker',
		screenshots: [
			{
				label: 'Compare Trackers',
				src: 'https://profilewebsite.blob.core.windows.net/images/Picture1.png'
			},
		    {  label: 'ByteTrack',
			   src: 'https://profilewebsite.blob.core.windows.net/images/bytetracker.png'
		    }
		]
	},
	{
		slug: 'llama2-prompting',
		color: '#5e95e3',
		description:
			'Prompting Llama2 to pretend to be a person in certain scenarios',
		shortDescription:
			'Prompting Llama2 to pretend to be a person in certain scenarios',
		links: [{ to: 'https://github.com/Honsl/Llama2-Prompt-Engineering', label: 'GitHub' }, { to: 'https://colab.research.google.com/drive/1abBcKL6MP-Dki7VYOz25ja5_Y22YEe0O?usp=sharing', label: 'Colab' }],
		logo: Assets.Meta,
		name: 'Llama2 Scenario Prompts',
		period: {
			from: new Date()
		},
		skills: getSkills('python'/*, 'ts', 'tailwind'*/),
		type: 'LLM Prompt Engineering'
	},
	{
		slug: 'chatgpt-prompting',
		color: '#ff3e00',
		description:
			'Prompting ChatGPT to pretend to be a person in certain scenarios',
		shortDescription:
			'Prompting ChatGPT to pretend to be a person in certain scenarios',
		links: [{ to: 'https://github.com/Honsl/GPT-Prompt-Engineering', label: 'GitHub' }, { to: 'https://colab.research.google.com/drive/1JdSsdU05nLOKmJfQoipi0oqNl5KpCGnr?usp=sharing', label: 'Colab' }],
		logo: Assets.Meta,
		name: 'ChatGPT Scenario Prompts',
		period: {
			from: new Date()
		},
		skills: getSkills('python'/*, 'ts', 'tailwind'*/),
		type: 'LLM Prompt Engineering'
	}/*,
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}*/
];

export default MY_PROJECTS;
