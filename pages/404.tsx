import { useAppContext } from '@hooks/context'
import { Button, Result } from 'antd'
import { NextPage } from 'next'
import Head from 'next/head'

const Custom404: NextPage = () => {
  const context = useAppContext()
  return (
    <>
      <Head>
        <title>404 Page not found - Jetniphan Pukkham-@All about me.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`${context.theme == 'dark' ? 'bg-content' : 'bg-content-light'} h-[100vh] pt-[70px] row align-items-center`}>
        <Result
          className={`${context.theme == 'dark' ? 'result404' : 'result404-light'}`}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </>
  )
}

export default Custom404