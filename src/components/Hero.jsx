import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen 
    mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full
          bg-[#915eff]"/>
          <div className="w-1 sm:h-80 
          violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ruman</span>
          </h1>
          <p className={`${styles.heroSubText}
          mt-2 text-white-100`}>
            I'm a Web developer,
            UI Designer,<br className="sm:block hidden"/>
            currently persuing a career in software engineering
          </p>
        </div>
      </div>

      {/* <ComputersCanvas/> */}

      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className="w-[32px] h-[62px]
          border-4 rounded-3xl border-secondary
          flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}

              className="w-3 h-3 bg-secondary 
              rounded-full mb-1"
            />

          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero