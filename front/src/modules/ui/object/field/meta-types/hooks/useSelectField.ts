import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { ThemeColor } from '@/ui/theme/constants/colors';

import { FieldContext } from '../../contexts/FieldContext';
import { useFieldInitialValue } from '../../hooks/useFieldInitialValue';
import { entityFieldsFamilySelector } from '../../states/selectors/entityFieldsFamilySelector';
import { FieldSelectValue } from '../../types/FieldMetadata';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';
import { isFieldSelect } from '../../types/guards/isFieldSelect';
import { isFieldSelectValue } from '../../types/guards/isFieldSelectValue';

export const useSelectField = () => {
  const { entityId, fieldDefinition, hotkeyScope } = useContext(FieldContext);

  assertFieldMetadata('ENUM', isFieldSelect, fieldDefinition);

  const { fieldName } = fieldDefinition.metadata;

  const [fieldValue, setFieldValue] = useRecoilState<FieldSelectValue>(
    entityFieldsFamilySelector({
      entityId: entityId,
      fieldName: fieldName,
    }),
  );
  const fieldSelectValue = isFieldSelectValue(fieldValue)
    ? fieldValue
    : { color: 'green' as ThemeColor, text: '' };

  const fieldInitialValue = useFieldInitialValue();

  const initialValue = {
    color: 'green' as ThemeColor,
    text: fieldInitialValue?.isEmpty
      ? ''
      : fieldInitialValue?.value ?? fieldSelectValue?.text ?? '',
  };

  return {
    fieldDefinition,
    fieldValue: fieldSelectValue,
    initialValue,
    setFieldValue,
    hotkeyScope,
  };
};
