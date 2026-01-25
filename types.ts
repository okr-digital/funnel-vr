export interface FunnelState {
  currentStep: number;
  segmentation: string | null;
  assets: string[];
  goal: string | null;
  painPoint: string | null;
}

export interface StepProps {
  onNext: (data?: any) => void;
  isActive: boolean;
  data?: FunnelState; // Optional passing of full state for dynamic text
}