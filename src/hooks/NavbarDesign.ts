// hooks/useGsap.ts
import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

type Animation = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
};

const useGsap = (refs: RefObject<HTMLElement>[], animations: Animation[]) => {
  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(ref.current, animations[index].from, animations[index].to);
      }
    });
  }, [refs, animations]);
};

export default useGsap;
