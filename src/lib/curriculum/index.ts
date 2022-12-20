import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { ExperienceStore } from '$lib/store/Experience.store';
import { SkillStore } from '$lib/store/Skill.store';

export const generateCurriculum = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

	type experienceType = { text: { text: string; bold?: boolean; fontSize?: number }[] }[];

	let experiences: experienceType = [];
	ExperienceStore.subscribe((value) => {
		experiences = value
			.filter((experience) => experience.type === 'professional')
			.map((experience) => {
				return {
					text: [
						{ text: experience.subtitle, bold: true },
						{ text: ` - ${experience.title}` },
						{
							text: ` (${experience.start} - ${experience.end ? experience.end : 'atualmente'})\n`,
							fontSize: 10
						}
					]
				};
			});
	});
	let academicExperiences: experienceType = [];
	ExperienceStore.subscribe((value) => {
		academicExperiences = value
			.filter((experience) => experience.type === 'academic')
			.map((experience) => {
				return {
					text: [
						{ text: experience.subtitle, bold: true },
						{ text: ` - ${experience.title}` },
						{
							text: ` (${experience.start} - ${experience.end ? experience.end : 'atualmente'})\n`,
							fontSize: 10
						}
					]
				};
			});
	});

	let skills: { text: string }[] = [];
	SkillStore.subscribe((value) => {
		skills = value.map((skill) => {
			return { text: `${skill.title}\n` };
		});
	});

	const dd: TDocumentDefinitions = {
		content: [
			{
				columns: [
					{
						width: '40%',
						text: [
							{ text: 'Contato\n', style: 'sectionTitle' },
							{ text: '(19)99582-8664 (Mobile)\n' },
							{ text: 'leonardo_bevilacqua@hotmail.com\n' },
							{ text: '\nwww.linkedin.com/in/leonardoabevilacqua (LinkedIn)\n' },
							{ text: '\nleonardobevilacqua.com.br (Portfolio)\n' },
							{ text: '\nPrincipais competências\n', style: 'sectionTitle' },
							...skills,
							{ text: '\nIdiomas\n', style: 'sectionTitle' },
							{ text: 'Português (Nativo)\n' },
							{ text: 'Inglês (Professional)\n' }
						]
					},
					{
						width: 'auto',
						text: [
							{ text: 'Leonardo Almeida Bevilacqua\n', style: 'header' },
							{
								text: 'Analista de Software Pleno na Instituto de Pesquisas Eldorado\n',
								style: 'subheader'
							},
							{ text: 'Campinas, São Paulo, Brasil\n' },
							{ text: '\nPerfil Profissional\n', style: 'sectionTitle' },
							{
								text: 'Formado em técnico em informática, na Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini e Ciências da computação, na faculdade DeVry Metrocamp.\n'
							},
							{
								text: '\nTrabalhei como estagiário e funcionário na Empresa VISIO TECNOLOGIA, trabalhando com a linguagem de programação 4GL e os bancos de dados Oracle, Informix e SQLServer.\n'
							},
							{
								text: '\nAtuei como estagiário, no Instituto Eldorado Campinas, e atualmente como analista de software.\n'
							},
							{ text: '\nPós graduado em engenharia de software.\n' },
							{ text: '\nExperiência\n', style: 'sectionTitle' },
							...experiences,
							{ text: '\nFormação acadêmica\n', style: 'sectionTitle' },
							...academicExperiences
						]
					}
				]
			}
		],
		styles: {
			header: {
				fontSize: 20,
				bold: true
			},
			subheader: {
				fontSize: 16,
			},
			sectionTitle: {
				fontSize: 14,
				bold: true
			}
		},
		defaultStyle: {
			columnGap: 10,
			lineHeight: 1.3
		}
	};

	pdfMake.createPdf(dd).open();
};
