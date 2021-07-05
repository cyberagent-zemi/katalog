package jp.co.cyberagent.katalog.android_sample.fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import jp.co.cyberagent.katalog.android_sample.databinding.FragmentSampleBinding

class SampleFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val binding = FragmentSampleBinding.inflate(inflater, container, false)
        return binding.root
    }
}
