import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'csharp',
		color: 'purple',
		description:
			'',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'dotnet',
		color: 'purple',
		description:
			'',
		logo: Assets.Dotnet,
		name: '.NET'
	}),
	s({
		slug: 'ros2',
		color: 'green',
		description:
			'',
		logo: Assets.ROS2,
		name: 'ROS2'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description:
			'',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'pandas',
		color: 'blue',
		description:
			'',
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description:
			'',
		logo: Assets.Numpy,
		name: 'Numpy'
	}),
	s({
		slug: 'pytorch',
		color: 'orange',
		description:
			'',
		logo: Assets.Pytorch,
		name: 'Pytorch'
	}),
	s({
		slug: 'tensor',
		color: 'blue',
		description:
			'',
		logo: Assets.Tensorflow,
		name: 'TensorFlow'
	}),
	s({
		slug: 'scikit',
		color: 'blue',
		description:
			'',
		logo: Assets.Scikit,
		name: 'Scikit Learn'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
