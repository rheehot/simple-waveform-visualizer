import { AlgorithmReverb } from './AlgorithmReverb';
import { Compressor } from './Compressor';
import { ConvolutionReverb } from './ConvolutionReverb';
import { Delay } from './Delay';
import { LowPassFilter, HighPassFilter, LowPassCombFilter } from './Filter';
import { GraphicEQ } from './GraphicEQ';
import { Tremolo } from './Tremolo';

export const Effects = [
  Compressor,
  ConvolutionReverb,
  AlgorithmReverb,
  Delay,
  LowPassFilter,
  HighPassFilter,
  LowPassCombFilter,
  GraphicEQ,
  Tremolo
];

export const EffectsName = Effects.map(effect => {
  return effect.name.replace(/(.)([A-Z])/g, '$1 $2');
});