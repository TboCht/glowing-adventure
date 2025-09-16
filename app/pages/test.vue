<template>
  <div class="flex flex-col h-full justify-between items-center">
    <div class="flex flex-col gap-6">
      <div
        class="flex flex-col items-center gap-1 text-center justify-center bg-[#EEE8E4] p-4 rounded-2xl"
      >
        <div class="flex items-center gap-1 text-[#757575] text-sm">
          <p class="">EDHEC Business School |</p>
          <div class="flex items-center gap-1">
            <Icon name="iconoir:map-pin" size="12" />
            <p>Roubaix</p>
          </div>
        </div>
        <p class="text-[#212121] font-semibold text-[18px]">
          International BBA
        </p>
      </div>

      <div
        class="flex flex-col items-center gap-6 bg-white py-8 px-6 rounded-2xl"
      >
        <img src="/rating.png" alt="rating" />
        <div class="flex flex-col items-center gap-2">
          <div class="flex flex-col items-center gap-2">
            <p class="text-[#212121] font-semibold text-[18px] px-4 py-2">
              91% · Très élevées
            </p>

            <div class="flex items-center gap-2">
              <p class="text-xs font-medium md:text-sm">Fiabilité</p>
              <div class="flex items-center">
                <Icon
                  name="material-symbols:star-rounded"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon
                  name="material-symbols:star-rounded"
                  v-for="i in 1"
                  :key="i"
                  class="text-[#E0E0E0]"
                />
              </div>
            </div>
          </div>
        </div>
        <p class="text-[#757575] text-center">
          Cette estimation est fournie à titre indicatif et ne garantit en aucun
          cas la décision d’admission de l’établissement.
        </p>
      </div>
    </div>
    <button-default
      label="Tester une autre formation"
      variant="primary"
      class="w-full sm:w-fit"
    />
  </div>
</template>
