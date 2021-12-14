import { useRef } from 'react';
import { getTag } from '../NativeMethods';
import { useSharedValue } from './useSharedValue';
export function useAnimatedRef() {
  const tag = useSharedValue(-1);
  const ref = useRef();

  if (!ref.current) {
    var fun = function () {
      const _f = function (component) {
        // enters when ref is set by attaching to a component
        if (component) {
          tag.value = getTag(component);
          fun.current = component;
        }

        return tag.value;
      };

      _f._closure = {
        tag,
        getTag,
        fun
      };
      _f.asString = "function _f(component){const{tag,getTag,fun}=jsThis._closure;{if(component){tag.value=getTag(component);fun.current=component;}return tag.value;}}";
      _f.__workletHash = 2837072662922;
      _f.__location = "/Users/pawelwieckowski/Projects/com/reanimated2-plugin-crash-repro/node_modules/react-native-reanimated/src/reanimated2/hook/useAnimatedRef.ts (15:61)";

      global.__reanimatedWorkletInit(_f);

      return _f;
    }();

    Object.defineProperty(fun, 'current', {
      value: null,
      writable: true,
      enumerable: false
    });
    ref.current = fun;
  }

  return ref.current;
}
