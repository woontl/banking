import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { log } from 'console'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.name || 'Guest'}
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