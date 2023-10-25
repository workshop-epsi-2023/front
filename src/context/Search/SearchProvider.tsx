import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import { useUndefinedContext } from '../../utils/function'

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextValue {
  searchValue: string
  isSearchable: boolean
  activateSearch: () => void
  disactivateSearch: () => void
  search: (e: any) => void
}

const SearchContext = createContext<SearchContextValue | null>(null)

export const useSearchContext = () => useUndefinedContext<SearchContextValue>(SearchContext)

const SearchProvider: FunctionComponent<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchable, setIsSearchable] = useState(false)

  const activateSearch = () => {
    setIsSearchable(true)
  }

  const disactivateSearch = () => {
    setIsSearchable(false)
  }

  const search = (e: any) => {
    setSearchValue(e.target.value)
  }

  return <SearchContext.Provider value={{ searchValue, isSearchable, activateSearch, disactivateSearch, search }}>{children}</SearchContext.Provider>
}

export default SearchProvider
