import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { log } from 'console'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'TL', lastName: 'Big Bao', email: 'test@gmail.com'}


  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guest'}
                  subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox
                  account={[]}
                  totalBanks={1}
                  totalCurrentBalance={6969.69}
                />
            </header>

            {/* recent txn */}
        </div>
        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.22 },{ currentBalance: 500.00 }]}
        />

    </section>
  )
}

export default Home