import React from 'react'
import Section from './Section'
import styled from "styled-components"

 function Home() {
    return (
        <div>
        <Container>
            <Section 
                 title="Model S"
                 description="Order Online for Touchless Delivery"
                 backgroundImg="model-S.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
            />
            <Section 
                 title="Model y"
                 description="Order Online for Touchless Delivery"
                 backgroundImg="model-Y.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
            />
            <Section 
                 title="Model 3"
                 description="Order Online for Touchless Delivery"
                 backgroundImg="model-3.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
            />
            <Section 
                 title="Model x"
                 description="Order Online for Touchless Delivery"
                 backgroundImg="model-X.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
            />
            <Section 
                 title="Lowest Cost Solar Panel In America"
                 description="Money-back guarantee"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order now"
                 rightBtnText="Learn more"
            />
            <Section 
                  title="Solor For New Roofs"
                  description="Solor Roof Costs Less Than a New Roof Plus Solar Panels"
                  backgroundImg="solar-roof.jpg"
                  leftBtnText="Order now"
                  rightBtnText="Learn more"
            />
            <Section 
                  title="Accessories"
                  description="Solor Roof Costs Less Than a New Roof Plus Solar Panels"
                  backgroundImg="accessories.jpg"
                  leftBtnText="Order now"
            />
        </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    z-index: 10;
    height : 100vh;
`