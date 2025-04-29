import InfiniteScrollCompanies from '@/components/InfiniteScrollCompanies/InfiniteScrollCompanies'
import WebDevelopment from '@/components/services/web-development/WebDevelopment'
import WPFAQS from '@/components/services/web-development/WPFAQS'
import WPForMultiChannel from '@/components/services/web-development/WPForMultiChannel'
import WPIdeal from '@/components/services/web-development/WPIdeal'
import WPOurServices from '@/components/services/web-development/WPOurServices'
import WPProcess from '@/components/services/web-development/WPProcess'
import WPTechStack from '@/components/services/web-development/WPTechStack'
import WPWhyChooseUs from '@/components/services/web-development/WPWhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <WebDevelopment />
      <WPWhyChooseUs />
      <WPOurServices/>
      <WPIdeal/>
      <WPProcess/>
      <WPTechStack/>
      <WPForMultiChannel />
      <WPFAQS/>
    </div>
  )
}

export default page
