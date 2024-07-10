import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

type Animation = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
};

const useGsap = (
  refs: RefObject<HTMLElement>[],
  animations: Animation[]
) => {
  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        const animation = animations[index];
        if (animation) {
          gsap.fromTo(ref.current, animation.from, animation.to);
        }
      }
    });
  }, [refs, animations]);
};

export default useGsap;
