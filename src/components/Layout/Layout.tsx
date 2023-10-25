import { Component, FunctionComponent, ReactNode, createElement, useEffect, useState } from 'react'
import { ROUTING_MOCK } from '../../mock/routing.mock'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RESTAURANT_MOCK } from '../../mock/restaurants.mock'
import { useSearchContext } from '../../context/Search/SearchProvider'

interface LayoutProps {
  children: any
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const { searchValue, search, isSearchable } = useSearchContext()
  const [show, setShow] = useState(false)
  const [profile, setProfile] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="w-full md:w-96 absolute lg:relative bg-white shadow h-screen flex-col justify-between hidden lg:flex pb-12">
            <div className="px-8">
              <Link to={'/'} className="w-full flex items-center">
                <img src="/src/img/Ecorate.png" className="h-16" />
              </Link>
              <ul className="mt-12">
                {ROUTING_MOCK.map((data) => {
                  const isActive = pathname === data.href

                  return (
                    <Link
                      to={data.href}
                      // TODO: finir le isActive
                      className={`flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6 ${isActive}`}
                      key={data.name}
                    >
                      <div className="flex items-center">
                        <span className="text-sm">{data.name}</span>
                      </div>
                      {data?.notificationCount && <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">{data?.notificationCount}</div>}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>

          {/*Mobile responsive sidebar*/}
          <div className={show ? 'w-full h-full absolute z-40  transform  translate-x-0 ' : '   w-full h-full absolute z-40  transform -translate-x-full'}>
            <div className="bg-gray-800 opacity-50 w-full h-full absolute" onClick={() => setShow(!show)}></div>
            <div className="w-full md:w-96 absolute z-40 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between px-8">
                    <Link to={'/'} className="relative cursor-pointer text-gray-600">
                      <img src="/src/img/Ecorate.png" className="h-20" />
                    </Link>
                    <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                  <div className="px-8">
                    <ul className="mt-12">
                      {ROUTING_MOCK.map((data) => {
                        const isActive = pathname === data.href

                        if (!isActive) {
                          return (
                            <Link to={data.href} className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6" key={data.name}>
                              <div className="flex items-center">
                                <span className="xl:text-base md:text-2xl text-base ml-2">{data.name}</span>
                              </div>
                              {data?.notificationCount && <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">{data?.notificationCount}</div>}
                            </Link>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
                <div className="w-full">
                  {isSearchable && (
                    <div className="flex justify-center mb-4 w-full px-6">
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input onChange={search} value={searchValue} className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                      </div>
                    </div>
                  )}
                  <div className="border-t border-gray-300">
                    <div className="w-full flex items-center justify-between px-6 pt-1">
                      <div className="flex items-center">
                        <img alt="profile-pic" src="https://thispersondoesnotexist.com/" className="w-8 h-8 rounded-md" />
                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="w-full">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-0">
              <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                  {isSearchable && (
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </div>
                      <input onChange={search} value={searchValue} className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                    </div>
                  )}
                </div>
                <div className="w-1/2 hidden lg:flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                      <div className="rounded-full">
                        {profile && (
                          <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                            <Link to={'/logout'} className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                                <span className="text-sm ml-2">Sign out</span>
                              </div>
                            </Link>
                          </ul>
                        )}
                        <div className="relative">
                          <img className="rounded-full h-10 w-10 object-cover" src="https://thispersondoesnotexist.com/" alt="avatar" />
                          <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm mx-3">Admin</p>
                      <div className="cursor-pointer text-gray-600">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)} id="menu">
                {show ? (
                  ''
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </nav>
            <children.type searchValue={searchValue} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
