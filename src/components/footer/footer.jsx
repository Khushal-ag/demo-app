export default function footer() {
  return (
    <>
      <footer className="absolute w-full bottom-0 bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://github.com/Khushal-ag/"
              className="hover:underline"
            >
              Khushal-ag™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-stretch mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <button href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </button>
            </li>
            <li>
              <button href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
