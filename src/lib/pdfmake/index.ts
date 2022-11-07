import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const test = () => {
	pdfMake.vfs = pdfFonts.pdfMake.vfs;

	const dd: TDocumentDefinitions = {
		content: [
			{
				alignment: 'justify',
				columns: [
					{
						width: '35%',
						text: [
							'Contato\n',
							'(19)99582-8664 (Mobile)\n',
							'leonardo_bevilacqua@hotmail.com\n',
							'www.linkedin.com/in/leonardoabevilacqua (LinkedIn)\n',
							'leonardobevilacqua.com.br/ (Portfolio)\n',
							'Principais competências\n',
							'AUTO\n',
							'Languages\n',
							'Português (Nativo)\n',
							'Inglês (Professional)\n'
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
							{ text: '\nPerfil Profissional\n', bold: true },
							{
								text: 'Formado em técnico em informática, na Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini e Ciências da computação, na faculdade DeVry Metrocamp.\n'
							},
							{
								text: 'Trabalhei como estagiário e funcionário na Empresa VISIO TECNOLOGIA, trabalhando com a linguagem de programação 4GL e os bancos de dados Oracle, Informix e SQLServer.\n'
							},
							{
								text: 'Atuei como estagiário, no Instituto Eldorado Campinas, e atualmente como analista de software.\n'
							},
							{ text: 'Pós graduado em engenharia de software.\n' },
							{ text: '\nObjetivos\n', bold: true },
							{ text: 'TODO.\n' },
							{ text: '\nExperiência\n', bold: true },
							{ text: 'AUTO.\n' },
							{ text: '\nFormação acadêmica\n', bold: true },
							{ text: 'AUTO.\n' }
						]
					}
				]
			}
		],
		styles: {
			header: {
				fontSize: 18,
				bold: true
			},
			bigger: {
				fontSize: 15,
				italics: true
			}
		},
		defaultStyle: {
			columnGap: 20
		}
	};

	pdfMake.createPdf(dd).open();
};
