import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: ' Artificial Intelligence Software Development',
		description: '',
		location: 'Ottawa,CA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Algonquin College',
		period: { from: new Date(2023,10, 1), to: new Date(2024, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Python','Machine Learning']
	},
	{
		degree: 'Computer Science',
		description: '',
		location: 'Ottawa,CA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Algonquin College',
		period: { from: new Date(2011, 0, 1), to: new Date(2014, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C','C++','C#','Java','HTML']
	}/*,
	{
		degree: 'Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}*/
];
