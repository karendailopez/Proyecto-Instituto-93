export default function WizardStep({ active, index, label, onClick }) {
    return <div className={`intro-x lg:text-center flex items-center ${ active ? 'lg:block flex-1 z-10' : 'mt-5 lg:mt-0 lg:block flex-1 z-10' }`}>
        <button onClick={() => onClick(index) } className={`w-10 h-10 rounded-full btn ${ active ? 'btn-primary' : 'text-gray-600 bg-gray-200 dark:bg-dark-1' }`}>{ index + 1 }</button>
        <div className={`lg:w-32 ${ active ? 'font-medium text-base lg:mt-3 ml-3 lg:mx-auto' : 'text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600' }`}>{ label }</div>
    </div>;
}
