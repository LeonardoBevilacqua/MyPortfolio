import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";

export const test = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs
}
