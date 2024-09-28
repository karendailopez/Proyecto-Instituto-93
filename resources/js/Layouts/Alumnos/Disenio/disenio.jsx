const disenio = () => {

return (
<div class="intro-y grid grid-cols-12 gap-6 mt-5">
                <div class="col-span-12 lg:col-span-6">
               
                    <div class="intro-y box">
                        <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                            <h2 class="font-medium text-base mr-auto">
                                Base de Datos
                            </h2>
                            <div class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                                <label class="form-check-label ml-0 sm:ml-2" for="show-example-1">Inscribirse</label>
                                <input id="show-example-1" data-target="#basic-datepicker" class="show-code form-check-switch mr-0 ml-3" type="checkbox"/>
                            </div>
                        </div>
                        <div id="basic-datepicker" class="p-5">
                            <div class="preview">
                                <input class="datepicker form-control w-56 block mx-auto" data-single-mode="true"/>
                            </div>
                            <div class="source-code hidden">
                                <button data-target="#copy-basic-datepicker" class="copy-code btn py-1 px-2 btn-outline-secondary"> <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example code </button>
                                <div class="overflow-y-auto mt-3 rounded-md">
                                    <pre id="copy-basic-datepicker" class="source-preview"> <code class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"> HTMLOpenTaginput class=&quot;datepicker form-control w-56 block mx-auto&quot; data-single-mode=&quot;true&quot;HTMLCloseTag </code> </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                <div class="col-span-12 lg:col-span-6">
                   
                    <div class="intro-y box">
                        <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                            <h2 class="font-medium text-base mr-auto">
                                Practica Profesional
                            </h2>
                            <div class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                                <label class="form-check-label ml-0 sm:ml-2" for="show-example-3">Inscribirse</label>
                                <input id="show-example-3" data-target="#daterangepicker" class="show-code form-check-switch mr-0 ml-3" type="checkbox"/>
                            </div>
                        </div>
                        <div id="daterangepicker" class="p-5">
                            <div class="preview">
                                <input data-daterange="true" class="datepicker form-control w-56 block mx-auto"/>
                            </div>
                            <div class="source-code hidden">
                                <button data-target="#copy-daterangepicker" class="copy-code btn py-1 px-2 btn-outline-secondary"> <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example code </button>
                                <div class="overflow-y-auto mt-3 rounded-md">
                                    <pre id="copy-daterangepicker" class="source-preview"> <code class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"> HTMLOpenTaginput data-daterange=&quot;true&quot; class=&quot;datepicker form-control w-56 block mx-auto&quot;HTMLCloseTag </code> </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                 
                </div>
            </div>
)}

export default disenio;