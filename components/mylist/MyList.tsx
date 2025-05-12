import { listData } from '@/lib/dummyData'
import './MyList.scss'
import Card from '../card/Card'

type MyListProps = {
    children?: React.ReactNode
}
const MyList = ({children}: MyListProps) => {
  return (
    <div className='mylist'>
        {listData.map((item) => (
            <Card key={item.id} item={item} />
        ))}
        {children}
    </div>
  )
}

export default MyList