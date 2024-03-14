



import CVpdf from './MyCVV2.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const PdfViewer = () => {
  const newplugin = defaultLayoutPlugin();

  return (
    <div className='bg-gray-800 flex justify-center'>
      <div className='w-full md:w-2/3 my-10 rounded-2xl overflow-hidden'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" className='' >
          <Viewer fileUrl={CVpdf} plugins={[newplugin]} className=''/>
        </Worker>
      </div>
    </div>
  )
}
export default PdfViewer;
